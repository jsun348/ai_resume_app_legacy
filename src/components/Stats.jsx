import styles from "../style";

const Stats = () => {
  const totalResumes = 10500; // Replace with the actual dynamic value

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 justify-center`}>
      <div className={`flex-1 flex justify-center items-center flex-row m-3`}>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gray-600 ml-3">
          Resumagica 已经成功处理过
        </p>
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-gradient ml-2">
          {totalResumes}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gray-600 ml-3">
          封简历！
        </p>
      </div>
    </section>
  );
};

export default Stats;
