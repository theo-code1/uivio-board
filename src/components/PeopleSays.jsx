import PeopleSaysArticle from './PeopleSaysArticle'
import Person1 from '../assets/person1.webp'
import Person2 from '../assets/person2.webp'
import Person3 from '../assets/person3.webp'
import Person4 from '../assets/person4.webp'
import Person5 from '../assets/person5.webp'
import Person6 from '../assets/person6.webp'
import Person7 from '../assets/person7.webp'
import Person8 from '../assets/person8.webp'
import Person9 from '../assets/person9.webp'

const PeopleSays = () => {

   const PeopleMessageInfo = [
  {
    Name: 'Alexander Akers',
    Job: 'Senior iOS Engineer Apple',
    Message: 'I get worried when I use a computer without @paste_app. What if there′s something important on the clipboard? It′s like how you can “hold” a piece in Tetris but you have to remember what it is.',
    Img: Person1
  },
  {
    Name: 'João Cunha',
    Job: 'Senior Product Manager Nubank',
    Message: 'Few things have had as much impact on my Mac workflow as @paste_app. It may look irrelevant, but think of how many times you copy/paste things over the course of a day — Paste makes this process a gazillion times better.',
    Img: Person2
  },
  {
    Name: 'Jonathan Z. White',
    Job: 'Designer & Developer Airbnb',
    Message: 'I′ve been using an app called @paste_app and it′s almost hilarious how much of a work flow improvement',
    Img: Person3
  },
  {
    Name: 'Chris Messina',
    Job: 'Hashtag Inventor',
    Message: 'This is a must-have Mac app for me. I use it dozens if not hundreds of times a day. So useful!',
    Img: Person4
  },
  {
    Name: 'Kristen Wright',
    Job: 'Marketing Day One Journal',
    Message: 'Finally bought @paste_app and I’m really digging it. Great for code snippets, hex colors & links you frequently use.',
    Img: Person5
  },
  {
    Name: 'Diego Freniche Brito',
    Job: 'Developer Advocate Realm/MongoDB',
    Message: `Using a clipboard manager has become second nature for me (and a necessity as developer). Have tried a bunch. @paste_app is the best by far. Instabuy. If you program and aren't using one of these, you're wasting time... Your time.`,
    Img: Person6
  },
  {
    Name: 'Sammy Schuckert',
    Job: 'UX designer IBM',
    Message: 'I′m a heavy @paste_app user for 3 years. Paste is core to my everyday workflows. Even while writing this tweet I′m using it. It provides me with superpowers and makes me crazy efficient. Every time someone sees me using it they go like, “Oh hey, what was that? I want that!”',
    Img: Person7
  },
  {
    Name: 'Matthias Feit',
    Job: 'Musician, UX Designer, Dad',
    Message: 'Thanks to @paste_app, I was able to cut the time I would have spent on copying and pasting today by about 75%.',
    Img: Person8
  },
  {
    Name: 'Simon Sturmer',
    Job: 'Software Engineer Google',
    Message: `@paste_app is my new favorite Mac App! I don't know how i went so long without it!`,
    Img: Person9
  },
];

    

  return (
    <section className='h-fit max-w-screen bg-[#f6f6f8] pt-32 flex flex-col gap-24 overflow-hidden'>
        <h1 className='text-4xl md:text-6xl text-black text-center font-inter-bold font-bold'>People everywhere<br />love Paste</h1>
        <div className="people-says-container md:w-[82dvw] lg:w-[56%] columns-1 md:columns-2 lg:columns-3 column-gap-tight items-center justify-center flex-wrap mx-auto" >
            {PeopleMessageInfo.map((item, index) => {

                // const personImgIndex = `Person${index + 1}`;

                return <PeopleSaysArticle
                    className={`${index >= 4 ? 'hidden md:flex' : ''} ${index >= 6 ? 'md:hidden lg:flex' : ''} shadow-2xl shadow-black/3 break-inside-avoid-column mb-6 md:mb-4 mx-auto `}
                    PersonImg={PeopleMessageInfo[index].Img}
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
