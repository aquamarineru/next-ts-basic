import { NextPage } from "next";
import Layout from "@/components/layout/Layout";
import Image from "next/image";
import Head from "next/head";

const NotFoundPage: NextPage = () => {
    return (
        <Layout>
            <Head>
                <title>Not Found</title>
            </Head>
            <div style={{textAlign: "center"}}>
                <Image priority src='/error404.png' alt=''  width={400} height={400}/>
            </div>

        </Layout>
    );
};

export default NotFoundPage;