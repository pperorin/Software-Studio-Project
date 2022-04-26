import { PageLayout } from '../../components';
const AboutUsPage = () => {
    // return list of members page

    return (
        <PageLayout>
            <header class="bg-secondary text-center py-5 mb-4">
                <div class="container">
                    <h1 class="fw-light text-white">Team Members</h1>
                </div>
            </header>

            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-7 mb-4">
                        <div class="card border-0 shadow">
                            {/* <img src="https://source.unsplash.com/TMgQMXoglsM/500x350" class="card-img-top" alt="..." /> */}
                            <div class="card-body text-center">
                                <h5 class="card-title mb-0">Noppawat Khamyot</h5>
                                <div class="card-text text-black-50">62010243</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-7 mb-4">
                        <div class="card border-0 shadow">
                            <div class="card-body text-center">
                                <h5 class="card-title mb-0">Nattapat Arunkitjaroen</h5>
                                <div class="card-text text-black-50">62010282</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-7 mb-4">
                        <div class="card border-0 shadow">
                            <div class="card-body text-center">
                                <h5 class="card-title mb-0">Nichakarn SukhumjitPitayotai</h5>
                                <div class="card-text text-black-50">62010299</div>
                            </div>
                        </div>
                    </div>

                    <div class="col-7 mb-4">
                        <div class="card border-0 shadow">
                            <div class="card-body text-center">
                                <h5 class="card-title mb-0">Tan Chaiwongsriaroon</h5>
                                <div class="card-text text-black-50">62010309</div>
                            </div>
                        </div>
                    </div>
                    <div class="col-7 mb-4">
                        <div class="card border-0 shadow">
                            <div class="card-body text-center">
                                <h5 class="card-title mb-0">Tanapol Kampoh</h5>
                                <div class="card-text text-black-50">62010355</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default AboutUsPage;
