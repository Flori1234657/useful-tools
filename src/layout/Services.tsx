import ToolsImg from "../assets/images/aboutImg.jpg";

const Services = () => {
  return (
    <main className="services">
      <h1>What our website offers?</h1>
      <div className="services__bottom-content" aria-label="Content wrapper">
        <div
          className="services__bottom-content__text-content"
          aria-label="Text content wrapper"
        >
          <h2>Useful tools!</h2>
          <p>
            We offer different tools {`(mini apps)`} like: password generator,
            different units conversion,image resizer and much more! All of this
            in one place, without the need to search the internet.
            <br /> <br />
            Also all of this services are free. In this way you can shorten to
            much time from your daily work, without the need to search for a
            specific tool on the internet. Simply come to our web and more
            likely that tool can be found on our catalog!
            <br /> <br />
            Then, what are you waiting for?! Go to the navigation menu and click
            Tools to continue. If you want to plan your day click Task.
          </p>
        </div>
        <img src={ToolsImg} alt="Tools image" />
      </div>
    </main>
  );
};

export default Services;
