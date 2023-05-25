import { features } from "../constants"
import styles, {layout} from "../style"
import Button from "./Button"

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-8 rounded-[20px] ${index !== features.length - 1 ? "mb-8" : "mb-0"} feature-card`} style={{ boxShadow: "var(--card-shadow)" }}>
    <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-8 h-8 object-contain ml-2" />
    </div>
    <div className="flex-1 flex flex-col justify-center ml-4">
      <h4 className="font-poppins font-semibold text-black text-2xl leading-[32px] mb-2">
        {title}
      </h4>
    </div>
  </div>
);


const Business = () => {
  return (
    <section id="features" className={layout.section}>
      
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>仅需三步，<br className="sm:block hidden" />制作精美英文简历</h2>
      </div>

      <div className={`${layout.sectionImg} flex-row justify-center gap-6`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business