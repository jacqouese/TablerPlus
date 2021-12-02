import HomeBanner from './subcomponents/HomeBanner';
import PageTop from './subcomponents/PageTop';


function Home() {
  return (
    <section>
      <PageTop title={'Dom'} />
      <HomeBanner />
    </section>
  );
}

export default Home;
