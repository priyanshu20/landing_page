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
          <ContactCard icon="fingerprint" color="teal" title="Security">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ContactCard>
          <ContactCard icon="stars" color="red" title="Trusted by many">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </ContactCard>
          <ContactCard icon="autorenew" title="Zero Downtime" color="lightBlue">
           Our servers run 24/7 and will never be a hindrance in saving lives of humans.
          </ContactCard>
        </div>

        <Form />
      </div>
    </section>
  );
}
