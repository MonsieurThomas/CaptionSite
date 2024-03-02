export default function PageHeader({
    h1Text = "Hello",
    h2Text = "SubHeader",
}) {
    return (
        <section className="text-center mt-24 mb-8 ">
        <h1 className="text-3xl" style={{textShadow: '3px 3px 0 rgba(0,0,0,0.2)'}}> 
          {h1Text}
        </h1>
        <h2 className="text-while/75">
          {h2Text}
        </h2>
      </section>
    )
}