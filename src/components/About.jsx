import aboutImage from "../assets/images/about-image.png";

export const About = () => {
  return (
    <div className="bg-white">
      <div className="p-6 md:p-24 grid grid-cols-1 md:grid-cols-2">
        <div className="md:pr-6">
          <h2 className="text-2xl md:text-3xl font-medium">About Us</h2>
          <p className="text-lg md:text-xl mt-4 md:mt-6">
            Welcome to Ecore, your ultimate destination for stylish and
            high-performance sneakers. At Ecore, we believe that sneakers are
            not just shoes, but a reflection of your personality and style. We
            are passionate about curating a collection of premium sneakers from
            renowned brands, offering you a diverse range of options to express
            yourself.
            <br />
            <br />
            With a focus on quality, comfort, and design, we handpick each
            sneaker in our collection to ensure they meet the highest standards.
            Whether you're a sneakerhead or simply looking for a reliable and
            fashionable pair, we have something for everyone. Our team of
            knowledgeable and dedicated sneaker enthusiasts is here to assist
            you in finding the perfect pair of sneakers that aligns with your
            preferences and needs. We strive to provide exceptional customer
            service and ensure your shopping experience with us is enjoyable and
            hassle-free.
          </p>
        </div>
        <div className="flex items-center justify-center mt-6 md:mt-0">
          <img
            src={aboutImage}
            alt=""
            className="w-full h-350 md:w-[400px] h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};
