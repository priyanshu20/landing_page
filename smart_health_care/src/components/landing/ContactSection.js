import Title from "components/landing/Title";
import ContactCard from "components/landing/ContactCard";
import Form from "components/landing/Form";

export default function ContactSection() {
  return (
    <section className="pb-20 relative block">
      <div className="container max-w-7xl mx-auto px-4 lg:pt-24">
        <Title heading="Support Covid patients">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis
          beatae molestias nostrum similique a incidunt amet sequi. Dignissimos
          deserunt, eius accusantium, voluptatem, architecto repudiandae nam
          doloribus quos ex labore blanditiis.
        </Title>

        <div className="flex flex-wrap -mt-12 justify-center">
          <ContactCard icon="payments" color="green" title="Donate">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </ContactCard>
          <ContactCard icon="masks" color="blue" title="Mask Donation">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </ContactCard>
          <ContactCard icon="water_drop" title="Blood Donation" color="red">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </ContactCard>
        </div>

        <Form />
      </div>
    </section>
  );
}
