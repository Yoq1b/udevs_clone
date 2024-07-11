import Contacts from "../Components/home/Contact";
import Email from "../Components/home/Email";
import Hero from "../Components/home/Hero";
import Marque from "../Components/home/Marque";
import OurServices from "../Components/home/OurServices";
import Tools from "../Components/home/Tools";
import Works from "../Components/home/Works";
import Consulting from "../Components/home/services/Consulting";
import Delever from "../Components/home/services/Delever";
import Design from "../Components/home/services/Design";
import ERPSystem from "../Components/home/services/ERPSystem";
import Goodzone from "../Components/home/services/Goodzone";
import Iman from "../Components/home/services/Iman";
import Mobile from "../Components/home/services/Mobile";
import Optimization from "../Components/home/services/Optimization";
import Sms from "../Components/home/services/Sms";
import Team from "../Components/home/services/Team";
const Home = () => {
  return (
    <div>
      <Hero />
      <OurServices />
      <Team />
      <Mobile />
      <ERPSystem />
      <Design />
      <Optimization />
      <Consulting />
      <Tools />
      <Marque />
      <Delever />
      <Sms />
      <Goodzone />
      <Iman />
      <Works />
      <Contacts />
      <Email />
    </div>
  );
};

export default Home;
