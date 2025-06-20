import PeopleSaysArticle from './PeopleSaysArticle'
import Person1 from '../assets/person1.jpg'
// import Person2 from '../assets/person2.jpg'
// import Person3 from '../assets/person3.jpg'
// import Person4 from '../assets/person4.jpg'
// import Person5 from '../assets/person5.jpg'
// import Person6 from '../assets/person6.jpg'
// import Person7 from '../assets/person7.jpg'
// import Person8 from '../assets/person8.jpg'
// import Person9 from '../assets/person9.jpg'

const PeopleSays = () => {

    const PeopleMessageInfo = [
        {
            Name: 'Alexander Akers',
            Job: 'Senior iOS Engineer Apple',
            Message: 'I get worried when I use a computer without @paste_app. What if there′s something important on the clipboard? It′s like how you can “hold” a piece in Tetris but you have to remember what it is.'
        },
        {
            Name: 'Chris Messina',
            Job: 'Hashtag Inventor',
            Message: 'This is a must-have Mac app for me. I use it dozens if not hundreds of times a day. So useful!'
        },
        {
            Name: 'Sammy Schuckert',
            Job: 'UX designer IBM',
            Message: 'I′m a heavy @paste_app user for 3 years. Paste is core to my everyday workflows. Even while writing this tweet I′m using it. It provides me with superpowers and makes me crazy efficient. Every time someone sees me using it they go like, “Oh hey, what was that? I want that!”'
        },
        {
            Name: 'João Cunha',
            Job: 'Senior Product Manager Nubank',
            Message: 'Few things have had as much impact on my Mac workflow as @paste_app. It may look irrelevant, but think of how many times you copy/paste things over the course of a day — Paste makes this process a gazillion times better.'
        },
        {
            Name: 'Kristen Wright',
            Job: 'Marketing Day One Journal',
            Message: 'Finally bought @paste_app and I’m really digging it. Great for code snippets, hex colors & links you frequently use.'
        },
        {
            Name: 'Matthias Feit',
            Job: 'Musician, UX Designer, Dad',
            Message: 'Thanks to @paste_app, I was able to cut the time I would have spent on copying and pasting today by about 75%.'
        },
        {
            Name: 'Jonathan Z. White',
            Job: 'Designer & Developer Airbnb',
            Message: 'I′ve been using an app called @paste_app and it′s almost hilarious how much of a work flow improvement'
        },
        {
            Name: 'Diego Freniche Brito',
            Job: 'Developer Advocate Realm/MongoDB',
            Message: `Using a clipboard manager has become second nature for me (and a necessity as developer). Have tried a bunch. @paste_app is the best by far. Instabuy.                                If you program and aren't using one of these, you're wasting time... Your time.`
        },
        {
            Name: 'Simon Sturmer',
            Job: 'Software Engineer Google',
            Message: `@paste_app is my new favorite Mac App! I don't know how i went so long without it!`
        },
    ]
    

  return (
    <section className='h-fit max-w-screen bg-black/5 pt-32 flex flex-col gap-24 overflow-hidden'>
        <h1 className='text-6xl text-black text-center font-inter-bold font-bold'>People everywhere<br />love Paste</h1>
        <div className="people-says-container md:w-full lg:w-3/5 columns-3 gap-4 items-start justify-center flex-wrap mx-auto">
            {PeopleMessageInfo.map((item, index) => {

                // const personImgIndex = `Person${index + 1}`;

                return <PeopleSaysArticle
                    className={`${index >= 4 ? 'hidden md:flex' : ''} break-inside-avoid-column mb-4 `}
                    PersonImg={Person1}
                    PersonName={item.Name}
                    PersonJob={item.Job}
                    PersonMessage={item.Message}
                    key={index}
                />

            })}
        </div>
    </section>
  )
}

export default PeopleSays
