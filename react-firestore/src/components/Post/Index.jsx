import { useState } from "react";
import { useForm } from "react-hook-form";
import PostSong from "../../Api/PostSong";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Box, Button, TextField, Typography } from "@mui/material";

const PostComponent = () => {
    const queryClient = useQueryClient();

    const [statusForm, setStatusForm] = useState(false);

    const { mutate } = useMutation({
        mutationKey: ["songCreate"],
        mutationFn: (data) => {
            PostSong({...data, year: new Date(data.year).toLocaleDateString()});
        },
        onSuccess: () => {
            setStatusForm((prev) => !prev);
            queryClient.invalidateQueries({queryKey: ["songs"]});
        }
    });

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm();

    return (
        <Box>
      {!statusForm && (
        <Button
          sx={{ mb: 5, bgcolor: "success.main" }}
          onClick={() => {
            setStatusForm((prev) => !prev);
          }}
          variant="contained"
        >
          Add new Song
        </Button>
      )}
      {statusForm && (
        <form
          onSubmit={handleSubmit((data) => {
            mutate(data), reset();
          })}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 3,
              py: 2,
              width: 400,
            }}
          >
          
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                {...register("title", { required: true })}
              />
              {errors.title && (
                <span
                  style={{ color: "red", textAlign: "left", marginTop: 10 }}
                >
                  Required field
                </span>
              )}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="outlined-basic"
                label="Artist"
                variant="outlined"
                {...register("artist", { required: true })}
              />
              {errors.artist && (
                <span
                  style={{ color: "red", textAlign: "left", marginTop: 10 }}
                >
                  Required field
                </span>
              )}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                type="date"
                id="outlined-basic"
                variant="outlined"
                {...register("year", { required: true })}
                sx={{ width: 195 }}
              />
              {errors.year && (
                <span
                  style={{ color: "red", textAlign: "left", marginTop: 10 }}
                >
                  Required field
                </span>
              )}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="outlined-basic"
                label="Genre"
                variant="outlined"
                {...register("genre", { required: true })}
              />
              {errors.genre && (
                <span
                  style={{ color: "red", textAlign: "left", marginTop: 10 }}
                >
                  Required field
                </span>
              )}
            </Box>
            <Button sx={{ width: 195, bgcolor: "success.main" }} type="submit" variant="contained">
              Add Song
            </Button>
          </Box>
        </form>
      )}
    </Box>
    )
};

export default PostComponent;