import { BlogPosts } from "./components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Hello 👋
      </h1>
      <p className="mb-4">
        {
         `I'm Henrique Horbovyi, and I'm excited to have you here at my little corner of 
          the internet where Android app development meets creativity and innovation. 
          Whether you're a seasoned developer, a curious newbie, or just 
          someone who loves all the tech things, there's something here for you!`
        }
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}