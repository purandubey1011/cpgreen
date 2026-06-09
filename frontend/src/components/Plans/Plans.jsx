import Hero from './Hero.jsx'
import Footer from '../common/Footer.jsx'
import Navbar from '../common/Navbar.jsx'
import UnitPlans from './UnitPlans.jsx'
import Comfort from './Comfort.jsx'
import OutdoorLiving from './OutdoorLiving.jsx'
import Banner from './Banner.jsx'
import OverallLayout from './OverallLayout.jsx'
import Form from '../Home/Form.jsx'

const Plans = () => {
  return (
    <div className="">
      <Navbar />
      <Hero/>
      <UnitPlans /> 
      <Comfort/>
      <OutdoorLiving />
      <Banner />
      <OverallLayout />
      <Form />
      <Footer />
    </div>
  )
}

export default Plans

