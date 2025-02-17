import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import GetAllSongs from "../../Api/GetAllSongs";
import DeleteSong from "../../Api/DeleteSong";

import { Box, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";

const ListComponent = () => {
  const queryClient = useQueryClient();

  const { mutate: btnDelete } = useMutation({
    mutationKey: ["deleteSong"],
    mutationFn: (songId) => {
      DeleteSong(songId);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["songs"] });
    },
  });
  const { isLoading, data, error } = useQuery({
    queryKey: ["songs"],
    queryFn: GetAllSongs,
  });

  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Loading...</Typography>
      </Box>
    );
  }
  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Error</Typography>
      </Box>
    );
  }

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 400,
        borderRadius: 2.5,
      }}
    >
      {data.map((el, i) => {
        return (
          <div key={el.id}>
            <ListItem
            
              alignItems="flex-start"
              sx={{ width: 400, textAlign: "center", height: 100 }}
            >
              <ListItemText
                primary={el.title}
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ color: "text.primary", display: "inline" }}
                    >
                      {el.artist}
                    </Typography>
                    {` — Género: ${el.genre}`}
                    <br />
                    <Typography variant="body3" color="text.secondary">
                      Año de la publicación:{" "}
                      <span>{el.year}</span>
                    </Typography>
                  </>
                }
              />
              <Button
                sx={{ my: "auto", ml: 2, bgcolor: "error.main" }}
                onClick={() => {
                  btnDelete(el.id);
                }}
                variant="contained"
              >
                Delete
              </Button>
            </ListItem>
            {data.length != i + 1 && <Divider />}
          </div>
        );
      })}
    </List>
  );
};

export default ListComponent;
