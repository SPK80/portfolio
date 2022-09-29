export type  ProjectDataType = {
  title: string
  description: string
  image: string
  repository: string
  deployment: string
}
export const projectsData: ProjectDataType[] = [
  {
    title: "Samurai-way",
    description: "Social network",
    image: "social-network.jpg",
    repository: "https://github.com/SPK80/samurai-way",
    deployment: "https://spk80.github.io/samurai-way/"
  },
  {
    title: "Todolist",
    description: "Todo list",
    image: "todolist.jpg",
    repository: "https://github.com/SPK80/todolist",
    deployment: "https://spk80.github.io/todolist/",
  },
  {
    title: "Counter",
    description: "Counter",
    image: "counter.jpg",
    repository: "https://github.com/SPK80/counter",
    deployment: "https://spk80.github.io/counter/"
  },
]
