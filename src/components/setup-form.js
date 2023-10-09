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
                        <div className="row g-0">
                            <h5>Dealer</h5>
                            <div className="col-lg-6">
                                <label
                                    htmlFor="dealerAsset"
                                    className="form-label"
                                >
                                    Assets Count
                                </label>
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="dealerAsset"
                                    placeholder="Asset Count"
                                    ref={dealerAssetCount}
                                />
                            </div>

                            <div className="col-lg-6">
                                <label
                                    htmlFor="dealerAlgoCount"
                                    className="form-label"
                                >
                                    Algo Count
                                </label>
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

                    <small>
                        <i>{"algo should be less or equal asset"}</i>
                    </small>
                </div>

                <div className="col-lg-3">
                    <div className="form-field">
                        <div className="row g-0">
                            <h5>Host</h5>
                            <div className="col-lg-6">
                                <label
                                    htmlFor="hostAssets"
                                    className="form-label"
                                >
                                    Asset Count
                                </label>
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="hostAssetsCount"
                                    placeholder="Asset Count"
                                    ref={hostAssetCount}
                                />
                            </div>
                            <div className="col-lg-6">
                                <label
                                    htmlFor="hostAlgoCount"
                                    className="form-label"
                                >
                                    Algo Count
                                </label>
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="hostAlgoCount"
                                    placeholder="Algo Count"
                                    ref={hostAlgoCount}
                                />
                            </div>
                        </div>

                        <small>
                            <i>{"algo should be less or equal asset"}</i>
                        </small>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="form-field">
                        <div className="row g-0">
                            <h5>Advertiser</h5>
                            <div className="col-lg-6">
                                <label
                                    htmlFor="advertiserAssets"
                                    className="form-label"
                                >
                                    Asset Count
                                </label>
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="advertiserAssetsCount"
                                    placeholder="Asset Count"
                                    ref={advertiserAssetCount}
                                />
                            </div>
                            <div className="col-lg-6">
                                <label
                                    htmlFor="advertiserAlgoCount"
                                    className="form-label"
                                >
                                    Algo Count
                                </label>
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="advertiserAlgoCount"
                                    placeholder="Algo Count"
                                    ref={advertiserAlgoCount}
                                />
                            </div>
                        </div>

                        <small>
                            <i>{"algo should be less or equal asset"}</i>
                        </small>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="form-field">
                        <div className="row g-0">
                            <h5>Filler</h5>
                            <div className="col-lg-6">
                                <label
                                    htmlFor="fillerAssets"
                                    className="form-label"
                                >
                                    Asset Count
                                </label>
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="fillerAssetsCount"
                                    placeholder="Asset Count"
                                    ref={fillerAssetCount}
                                />
                            </div>
                            <div className="col-lg-6">
                                <label
                                    htmlFor="fillerAlgoCount"
                                    className="form-label"
                                >
                                    Algo Count
                                </label>
                                <input
                                    type="number"
                                    className="form-control rounded-0"
                                    id="fillerAlgoCount"
                                    placeholder="Algo Count"
                                    ref={fillerAlgoCount}
                                />
                            </div>
                        </div>

                        <small>
                            <i>{"algo should be less or equal asset"}</i>
                        </small>
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
