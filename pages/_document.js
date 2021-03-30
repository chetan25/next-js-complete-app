import Document, { Html, Head, Main, NextScript } from 'next/document';

// allow us to define general structure and add extra elements to html
// is a class based

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head />
                <body>
                    <Main />
                    <NextScript /> 
                    <div id='notifications'></div>
                </body>
            </Html>
        );
    }
}

export default MyDocument