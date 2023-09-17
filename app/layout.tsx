import Layout from '@/components/Layout';
import '@/styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang='en'>
            <Head />

            <body>
                <Layout>
                    {children}
                </Layout>
            </body>
        </html>
    )
}

export default RootLayout;

const Head = () => {
    return (
        <head>
            <title>Delivery | Nirulas</title>
            <meta name="description" content='Delivery Nirulas' />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
    )
}