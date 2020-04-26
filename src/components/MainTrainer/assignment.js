import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PDFViewer from 'pdf-viewer-reactjs'
import FormPenilaian from './formPenilaian';
import { connect } from 'react-redux';
import { BoxLoading } from 'react-loadingg';
import { TextField } from '@material-ui/core';

export class Assignment extends React.Component {
    state = { class: null, loading: true, action: false, pdf: "", file: "" }
    componentDidMount = async () => {
        this.setState({ loading: false })
    }

    render() {
        if (this.state.loading) {
            return (
                <div>
                    <BoxLoading />
                </div>
            )
        } else {
            return (
                <div>
                    <TextField type="text"></TextField>
                    <Grid container component="main" style={{ marginTop: "90px" }}>
                        <Grid item xs={false} sm={4} md={7}>
                            <PDFViewer
                                document={{
                                    url: this.props.selectPdfReducer,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                            <FormPenilaian doRenderPdf={this.doRenderPdf} />
                        </Grid>
                    </Grid>
                </div>
            );
        }
    }
}



const mapStateToProps = state => {
    return {
        selectPdfReducer: state.selectPdfReducer
    };
};


export default connect(mapStateToProps, null)(Assignment);