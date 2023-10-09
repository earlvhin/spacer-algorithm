import Head from "next/head";
import { useState } from "react";

/** Components */
import SetupForm from "@/components/setup-form";

export default function Home() {
    const [generatedContentData, setGeneratedContentData] = useState(null);
    const [generatedPlaylistOrderData, setPlaylistOrder] = useState([]);

    function generateContenData(contentData) {
        const generatedPlaylistContents = {};
        const generatedPlaylistOrder = [];
        const historyIndex = {};
        let playlistContents = [];

        /** Content Frequency Checker */
        const areAllContentsUsed = (firstArray, secondArray) => {
            return secondArray.every((element) => firstArray.includes(element));
        };

        /** Generating/Sorting Playlist Contents */
        for (const c in contentData) {
            const cId = c[0];
            const cValue = contentData[c].asset;
            generatedPlaylistContents[c] = [];

            for (let counter = 0; counter < cValue; counter++) {
                const content = `${cId}${counter + 1}`;
                generatedPlaylistContents[c].push(content);
                playlistContents.push(content);
            }
        }

        /** Set Generated Content Data */
        setGeneratedContentData(generatedPlaylistContents);

        /** Setting up algo results */
        while (!areAllContentsUsed(generatedPlaylistOrder, playlistContents)) {
            for (const c in contentData) {
                const algoCount = contentData[c].algo;
                const assetCount = generatedPlaylistContents[c].length;

                /** Setting Up Starting Point */
                let startIndex =
                    historyIndex[c] + 1 < assetCount ? historyIndex[c] + 1 : 0;

                console.log("startIndex", c, startIndex);

                for (let cIteration = 0; cIteration < algoCount; cIteration++) {
                    const startIndexComputed = startIndex + cIteration;
                    const start =
                        startIndexComputed < assetCount
                            ? startIndexComputed
                            : 0;

                    /** Picked Content by Algorithm */
                    const cAlgo = generatedPlaylistContents[c][start];

                    /** Populating Playlist Order */
                    generatedPlaylistOrder.push(cAlgo);

                    /** Setting Asset Index History */
                    historyIndex[c] = start;
                }
            }
        }

        setPlaylistOrder(generatedPlaylistOrder);
        console.log("generatedPlaylistOrder ==>", generatedPlaylistOrder);
    }

    return (
        <>
            <Head>
                <title>Spacer Algorithm</title>
                <meta
                    name="description"
                    content="Playlist contents sort and order assistant"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <main>
                <div className="container py-5">
                    <h1 className="mb-1">Spacer Algo</h1>
                    <p className="mb-4">
                        Showcasing the power of automated playlist content
                        ordering
                    </p>
                    <SetupForm onDataSubmit={generateContenData} />

                    <hr />

                    <div className="generated-content-area">
                        <h2 className="mb-1">Generated Content Data</h2>
                        <p className="mb-4">
                            Dummy contents based on user input
                        </p>

                        {generatedContentData &&
                            Object.keys(generatedContentData).map(
                                (key, index) => (
                                    <div
                                        className="content-collection mb-3"
                                        key={index}
                                    >
                                        <h4 className="text-capitalize">
                                            {key}
                                        </h4>
                                        <div className="row">
                                            {generatedContentData[key].map(
                                                (value, valueIndex) => (
                                                    <div
                                                        className="col-lg-1 mb-3"
                                                        key={valueIndex}
                                                    >
                                                        <div className="box shadow rounded p-2 d-flex align-items-end justify-content-end">
                                                            <h5 className="m-0">
                                                                {value}
                                                            </h5>
                                                        </div>
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )
                            )}
                    </div>

                    <hr />

                    <div className="generated-playlist-order-area">
                        <h2 className="mb-1">Generated Playlist Order Data</h2>
                        <p className="mb-4">
                            Spacer algorithm results based on user input
                        </p>

                        <div className="row">
                            {generatedPlaylistOrderData.map(
                                (value, valueIndex) => (
                                    <div className="col-lg-1" key={valueIndex}>
                                        <div className="box shadow rounded p-2 d-flex align-items-end justify-content-end">
                                            <h5 className="m-0">{value}</h5>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
