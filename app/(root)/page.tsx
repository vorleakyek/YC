import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home( {searchParams}: {searchParams: Promise<{query?: string}>}) {

  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name:"VLKY"},
      _id: 1,
      description: "This is a description",
      image: "https://media.newyorker.com/photos/65527dfc8891bf3f2830ffd7/master/w_960,c_limit/Robin-Pandas-Leave.jpg",
      category: "Zoo",
      title: "Panda Zoo"
    },
  ]

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
            Pitch Your Startup, <br /> Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
        </p>

        <SearchForm query={query}/>
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `search results for "${query}"` : `All Startups`}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
              posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post}/>
              ))
          ) : (
            <p className="no-results">NO startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
