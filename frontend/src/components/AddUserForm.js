import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, CssBaseline, Grid, TextField } from "@mui/material";
import { useFetch } from "../hooks/useFetch";
import { usePostRequest } from "../hooks/usePostRequest";
import { Formik, Form } from "formik";

const AddUserForm = () => {
  const [createUser, { data, isLoading, error }] = usePostRequest("add_user");

  const handleFormSubmit = (e) => {
    createUser(e);
  };

  return (
    <Formik
      initialValues={{
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        adresse: "",
      }}
      onSubmit={handleFormSubmit}
    >
      {({ handleSubmit, values, handleChange }) => (
        <Form>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                Add User
              </Typography>
              <Box component="form" noValidate sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="nom"
                      required
                      fullWidth
                      id="nom"
                      label="nom"
                      autoFocus
                      value={values.nom}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      id="prenom"
                      label="prenom"
                      name="prenom"
                      autoComplete="family-name"
                      value={values.prenom}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="telephone"
                      label="telephone"
                      type="telephone"
                      id="telephone"
                      value={values.telephone}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      name="adresse"
                      label="adresse"
                      type="adresse"
                      id="adresse"
                      value={values.adresse}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit}
                >
                  create
                </Button>
              </Box>
            </Box>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default AddUserForm;
