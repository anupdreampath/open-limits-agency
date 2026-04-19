import { PROCESS } from '@/lib/assets';

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-[340px_1fr] gap-12">
        <div className="md:sticky md:top-28 self-start">
          <span className="eyebrow">Process</span>
          <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl leading-[1.1] text-greenbrand">
            From Idea to Execution: We Handle It All!
          </h2>
        </div>
        <div className="grid gap-4">
          {PROCESS.map((p) => (
            <div key={p.title} className="card-process">
              <h3 className="font-semibold text-xl text-greenbrand">{p.title}</h3>
              <p className="mt-2 text-ink/70 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
