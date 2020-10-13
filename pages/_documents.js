import Document, { Html, Head, Main, NextScipt } from 'next/document';

class NewDocument extends Document {

    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                </Head>
                <body>
                    <Main/>
                    <NextScipt/>
                </body>
            </Html>
        )
    }
}

export default NewDocument;