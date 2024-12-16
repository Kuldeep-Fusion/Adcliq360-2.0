import Customcss from "./ServceAbout.module.css"

const ServiceAbout = () => {
    return(
         <div className={Customcss.about}>
            <div className="container flex justify-center items-center m-auto gap-[3rem] w-full">
      {/* Left Section */}
      <div className={Customcss.left}>
        <p>From small, early-stage companies</p>
        <p>to huge, international</p>
        <p>multinational corporations,</p>
        <p>we've had the honour of working</p>
        <p>on some truly fascinating projects</p>
        <p>for our clients.</p>
      </div>

      {/* Right Section */}
      <div className={Customcss.right}>
        <p>Branding initiatives that have been successful on society applications</p>
        <p>Presented real estate clients with thousands of qualified leads.</p>
        <p>Completed design of multiple industry-specific websites</p>
        <p>Performed effective email marketing campaigns</p>
        <p>Boosted client websites' Google rankings</p>
        <p>Effectively designed newspapers</p>
      </div>

    </div>

    </div>

    )
}
export default ServiceAbout