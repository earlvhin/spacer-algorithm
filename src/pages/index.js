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
                let assetCounter = 0;
                let startIndex =
                    historyIndex[c] + 1 < assetCount ? historyIndex[c] + 1 : 0;

                for (let cIteration = 0; cIteration < algoCount; cIteration++) {
                    let startIndexComputed = startIndex + assetCounter;
                    let start = startIndexComputed;

                    if (startIndexComputed >= assetCount) {
                        start = 0;
                        startIndex = 0;
                        assetCounter = 0;
                    }

                    /** Picked Content by Algorithm */
                    const cAlgo = generatedPlaylistContents[c][start];

                    console.log({
                        c,
                        assetCounter,
                        startIndex,
                        cIteration,
                        startIndexComputed,
                        start,
                        cAlgo,
                    });

                    /** Populating Playlist Order */
                    generatedPlaylistOrder.push(cAlgo);

                    /** Setting Asset Index History */
                    historyIndex[c] = start;
                    assetCounter++;
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
                <div className="container pt-4">
                    <h3 className="mb-1">Spacer Algo v1.0.0</h3>
                    <p className="mb-4">
                        Showcasing the power of automated playlist content
                        ordering
                    </p>
                    <SetupForm onDataSubmit={generateContenData} />

                    <hr />

                    <div className="generated-content-area">
                        <h3 className="mb-1">Generated Content Data</h3>
                        <p className="mb-4">
                            Dummy contents based on user input
                        </p>

                        <div className="row">
                            {generatedContentData &&
                                Object.keys(generatedContentData).map(
                                    (key, index) => (
                                        <div
                                            className="col-lg-6 content-collection mb-4"
                                            key={index}
                                        >
                                            <h5 className="text-capitalize">
                                                {key}
                                            </h5>
                                            <div className="row">
                                                {generatedContentData[key].map(
                                                    (value, valueIndex) => (
                                                        <div
                                                            className="col-lg-2 mb-3"
                                                            key={valueIndex}
                                                        >
                                                            <div
                                                                className={
                                                                    "box border shadow rounded p-2 d-flex align-items-end justify-content-end " +
                                                                    key[0]
                                                                }
                                                            >
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
                    </div>

                    <hr />

                    <div className="generated-playlist-order-area">
                        <h3 className="mb-1">Generated Playlist Order Data</h3>
                        <p className="mb-4">
                            Spacer algorithm results based on user input
                        </p>

                        <div className="row">
                            {generatedPlaylistOrderData.map(
                                (value, valueIndex) => (
                                    <div
                                        className="col-lg-1 mb-3"
                                        key={valueIndex}
                                    >
                                        <div
                                            className={
                                                "box border shadow rounded p-2 d-flex align-items-end justify-content-end " +
                                                value[0]
                                            }
                                        >
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
