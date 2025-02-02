import type { Project } from "@/.contentlayer/generated";
import Link from "next/link";
import { Eye, View } from "lucide-react";

type Props = {
	project: Project;
};

export const Article: React.FC<Props> = ({ project}) => {
	return (
		<Link href={project.externalLink ?? `https://github.com/arthamna`}>
			<article className="p-4 md:p-8">
				<div className="flex justify-between gap-2 items-center">
					<span className="text-xs duration-1000 text-stone-500 group-hover:text-zinc-600 group-hover:border-zinc-400 drop-shadow-orange">
						{project.date ? (
							<time dateTime={new Date(project.date).toISOString()}>
								{Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
									new Date(project.date),
								)}
							</time>
						) : (
							<span>On Progress</span>
						)}
					</span>
			
				</div>
				<h2 className="z-20 text-xl font-medium duration-1000 lg:text-3xl text-slate-600 group-hover:text-white font-display">
					{project.title}
				</h2>
				<p className="z-20 mt-4 text-sm  duration-1000 text-stone-600 group-hover:text-black">
					{project.description}
				</p>
			</article>
		</Link>
	);
};
