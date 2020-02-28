import React, { useRef } from 'react'
import { Grid, Typography, Button, Paper } from "@material-ui/core"
import "./app.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as style } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import * as Yup from "yup"
import FormGenerator, { FieldGenerator } from 'formik-generator-materialui'

export default function App() {

  const formRef = useRef(null);

  const comps = [
    <div>
      <FormGenerator
        formRef={formRef}
        defaultValue={{
          fullname: "john"
        }}
        onSubmit={(values) => {
          console.log(values) // {fullname : "john", ...}
        }}
        fields={[
          {
            title: "Full Name",
            path: ["fullname"],
            typeField: "textfield",
            yup: Yup.string().required(),
          },
        ]}
      />
      <Button style={{ marginTop: 20 }} variant={"outlined"} onClick={() => {
        formRef.current.submitForm(); //.isSubmitting() .setFieldTouched() ...
      }}>Validate</Button>
    </div>,
    <FieldGenerator text='1' />
  ]

  const code = [
    "<FormGenerator  text='1'  number={2} />",
    "<FieldGenerator text='1' />"
  ]

  return (
    <div className="root">
      <Typography variant="h4" className="title" gutterBottom>
        formik-generator-materialui
        </Typography>
      <Grid container spacing={6}>
        {comps.map((c, i) => [<Grid key={i + "1"} item xs={12} md={6}>
          <Paper className="root">
            {c}
          </Paper>
        </Grid>,
        <Grid key={i + "2"} item xs={12} md={6}>
          <SyntaxHighlighter language="jsx" style={style} >
            {"(" + code[i] + ")"}
          </SyntaxHighlighter>
        </Grid>
        ])
        }
      </Grid>
    </div>
  )

}