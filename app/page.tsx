import { BlogPosts } from "./components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello 👋
      </h1>
      <p className="mb-4">
          I'm Henrique Horbovyi, a Software Developer passionated about mobile tech 📱 
          and it's very exciting to have you here on my corner of the Internet.
          <br/>  
          Whether you're a seasoned developer, a curious newbie, or just 
          someone who loves tech, there's something here for you!
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}