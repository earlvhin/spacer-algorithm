import { useRef } from "react";

export default function SetupForm(props) {
    const dealerAssetCount = useRef();
    const hostAssetCount = useRef();
    const advertiserAssetCount = useRef();
    const fillerAssetCount = useRef();

    const dealerAlgoCount = useRef();
    const hostAlgoCount = useRef();
    const advertiserAlgoCount = useRef();
    const fillerAlgoCount = useRef();

    function submitHandler(event) {
        event.preventDefault();

        props.onDataSubmit({
            dealer: {
                asset: parseInt(dealerAssetCount.current.value),
                algo: parseInt(dealerAlgoCount.current.value),
            },
            host: {
                asset: parseInt(hostAssetCount.current.value),
                algo: parseInt(hostAlgoCount.current.value),
            },
            advertiser: {
                asset: parseInt(advertiserAssetCount.current.value),
                algo: parseInt(advertiserAlgoCount.current.value),
            },
            filler: {
                asset: parseInt(fillerAssetCount.current.value),
                algo: parseInt(fillerAlgoCount.current.value),
            },
        });
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="row align-items-end mb-3">
                <div className="col-lg-3">
                    <div className="form-field">
                        <label htmlFor="dealerAsset" className="form-label">
                            Dealer Assets
                        </label>

                        <div className="row g-0">
                            <div className="col-lg-6">
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="dealerAsset"
                                    placeholder="Asset Count"
                                    ref={dealerAssetCount}
                                />
                            </div>

                            <div className="col-lg-6">
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="dealerAlgo"
                                    placeholder="Algo Count"
                                    ref={dealerAlgoCount}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="form-field">
                        <label htmlFor="hostAssets" className="form-label">
                            Host Assets
                        </label>
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="hostAssetsCount"
                                    placeholder="Asset Count"
                                    ref={hostAssetCount}
                                />
                            </div>
                            <div className="col-lg-6">
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="hostAlgoCount"
                                    placeholder="Algo Count"
                                    ref={hostAlgoCount}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="form-field">
                        <label
                            htmlFor="advertiserAssets"
                            className="form-label"
                        >
                            Advertiser Assets
                        </label>
                        <div className="row g-0">
                            <div className="col-lg-6">
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="advertiserAssetsCount"
                                    placeholder="Asset Count"
                                    ref={advertiserAssetCount}
                                />
                            </div>
                            <div className="col-lg-6">
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="advertiserAlgoCount"
                                    placeholder="Algo Count"
                                    ref={advertiserAlgoCount}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="form-field">
                        <label htmlFor="fillerAssets" className="form-label">
                            Filler Assets
                        </label>

                        <div className="row g-0">
                            <div className="col-lg-6">
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="fillerAssetsCount"
                                    placeholder="Asset Count"
                                    ref={fillerAssetCount}
                                />
                            </div>
                            <div className="col-lg-6">
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="fillerAlgoCount"
                                    placeholder="Algo Count"
                                    ref={fillerAlgoCount}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <button type="submit" className="btn btn-primary w-100">
                        Submit
                    </button>
                </div>
            </div>
        </form>
    );
}
