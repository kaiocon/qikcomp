import React from 'react';
const check = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svgCheck"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" class=""></path></svg>';

class about extends React.Component {

    componentDidMount() {
        document.title = "QikComp - Features";


    }

    render() {
        return(
            <div className="container">
                <h1 className='aboutTitle'>Features:</h1>
            <div id='row'>
                <div className='col-sm-7'></div>
                <div className="card2">
                    <div className="header">
                        <h3 className="title2"><i className="fa fa-address-card"></i>Account Registration</h3>
                    </div>
                    <table className="table">
                        <tbody>
                        <tr>
                            <td width="40">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img"
                                     xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                     className="svgCheck">
                                    <path fill="currentColor"
                                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                          className="checkIcon"></path>
                                </svg></td>
                            <td>Automatic seeding <span className="muted">with optimal club seperation</span></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td width="40"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img"
                                                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                                className="svgCheck">
                                <path fill="currentColor"
                                      d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                                      className="checkIcon"></path>
                            </svg></td>
                            <td>Manual seeding</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        )
    }
}

export default about;