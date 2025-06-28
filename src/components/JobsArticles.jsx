
const JobsArticles = ({ ClassName, Header, Paragraph, JobIcon }) => {
  return (
    <article className={`${ClassName} gap-2 mx-auto`}>
        {JobIcon}
        <h2 className="header text-xl md:text-2xl font-inter font-semibold">{Header}</h2>
        <p className="Description text-sm md:text-lg font-inter font-light">{Paragraph}</p>

    </article>
  )
}

export default JobsArticles