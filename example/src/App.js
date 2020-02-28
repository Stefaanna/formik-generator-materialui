import React, { Component } from 'react'
import { Grid, Typography, Paper } from "@material-ui/core"
import "./app.css";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark as style } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import jsxToString from 'jsx-to-string';

// export {
//   default as atomOneDark
// } from "react-syntax-highlighter/dist/cjs/styles/hljs/atom-one-dark";

import FormGenerator2, { FormGenerator, FieldGenerator } from 'formik-generator-materialui'

export default class App extends Component {
  render() {

    let comps = [
      <FormGenerator
        text='1'
        number={2}
      />,
      <FieldGenerator text='1' />
    ]

    return (
      <div className="root">
        <Typography variant="h4" className="title" gutterBottom>
          formik-generator-materialui
        </Typography>
        <Grid container spacing={6}>
          {comps.map(c => [<Grid item xs={12} md={6}>
            <Paper className="root">
              {c}
            </Paper>
          </Grid>,
          <Grid item xs={12} md={6}>
            <SyntaxHighlighter language="jsx" style={style} >
              {"(" + jsxToString(c) + ")"}
            </SyntaxHighlighter>
          </Grid>
          ])
          }
        </Grid>
      </div>
    )
  }
}
