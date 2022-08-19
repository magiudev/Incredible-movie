type categoriesType = "action" | "comedy" | "anime" | "horror";
export type recordType = {
    id: string,
    title: string,
    desc: string,
    thumbnail: string,
    src: string,
    rating: number
    category: categoriesType,
    year: Date
}

const data: recordType[]= [
  {
    id: "1",
    title: "Movie Title 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sollicitudin imperdiet. Cras interdum nisi vitae metus vestibulum, sed gravida libero bibendum. Aliquam erat volutpat. Cras dignissim, nisi id venenatis aliquet, odio urna finibus elit, eget luctus magna sem id ipsum.",
    thumbnail: "",
    src: "",
    rating: 5,
    category: "action",
    year: new Date(),
  },
  {
    id: "2",
    title: "Movie Title 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sollicitudin imperdiet. Cras interdum nisi vitae metus vestibulum, sed gravida libero bibendum. Aliquam erat volutpat. Cras dignissim, nisi id venenatis aliquet, odio urna finibus elit, eget luctus magna sem id ipsum.",
    thumbnail: "",
    src: "",
    rating: 7,
    category: "action",
    year: new Date(),
  },
  {
    id: "3",
    title: "Movie Title 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sollicitudin imperdiet. Cras interdum nisi vitae metus vestibulum, sed gravida libero bibendum. Aliquam erat volutpat. Cras dignissim, nisi id venenatis aliquet, odio urna finibus elit, eget luctus magna sem id ipsum.",
    thumbnail: "",
    src: "",
    rating: 6,
    category: "action",
    year: new Date(),
  },
  {
    id: "4",
    title: "Movie Title 4",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sollicitudin imperdiet. Cras interdum nisi vitae metus vestibulum, sed gravida libero bibendum. Aliquam erat volutpat. Cras dignissim, nisi id venenatis aliquet, odio urna finibus elit, eget luctus magna sem id ipsum.",
    thumbnail: "",
    src: "",
    rating: 1,
    category: "action",
    year: new Date(),
  },  
  {
    id: "5",
    title: "Movie Title 5",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sollicitudin imperdiet. Cras interdum nisi vitae metus vestibulum, sed gravida libero bibendum. Aliquam erat volutpat. Cras dignissim, nisi id venenatis aliquet, odio urna finibus elit, eget luctus magna sem id ipsum.",
    thumbnail: "",
    src: "",
    rating: 1,
    category: "action",
    year: new Date(),
  },  
  {
    id: "6",
    title: "Movie Title 6",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sollicitudin imperdiet. Cras interdum nisi vitae metus vestibulum, sed gravida libero bibendum. Aliquam erat volutpat. Cras dignissim, nisi id venenatis aliquet, odio urna finibus elit, eget luctus magna sem id ipsum.",
    thumbnail: "",
    src: "",
    rating: 3,
    category: "action",
    year: new Date(),
  },  
  {
    id: "7",
    title: "Movie Title 7",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sollicitudin imperdiet. Cras interdum nisi vitae metus vestibulum, sed gravida libero bibendum. Aliquam erat volutpat. Cras dignissim, nisi id venenatis aliquet, odio urna finibus elit, eget luctus magna sem id ipsum.",
    thumbnail: "",
    src: "",
    rating: 5,
    category: "action",
    year: new Date(),
  },  
  {
    id: "8",
    title: "Movie Title 8",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sollicitudin imperdiet. Cras interdum nisi vitae metus vestibulum, sed gravida libero bibendum. Aliquam erat volutpat. Cras dignissim, nisi id venenatis aliquet, odio urna finibus elit, eget luctus magna sem id ipsum.",
    thumbnail: "",
    src: "",
    rating: 8,
    category: "action",
    year: new Date(),
  },  
  {
    id: "9",
    title: "Movie Title 9",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sollicitudin imperdiet. Cras interdum nisi vitae metus vestibulum, sed gravida libero bibendum. Aliquam erat volutpat. Cras dignissim, nisi id venenatis aliquet, odio urna finibus elit, eget luctus magna sem id ipsum.",
    thumbnail: "",
    src: "",
    rating: 9,
    category: "action",
    year: new Date(),
  },  
  {
    id: "10",
    title: "Movie Title 10",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat sollicitudin imperdiet. Cras interdum nisi vitae metus vestibulum, sed gravida libero bibendum. Aliquam erat volutpat. Cras dignissim, nisi id venenatis aliquet, odio urna finibus elit, eget luctus magna sem id ipsum.",
    thumbnail: "",
    src: "",
    rating: 1,
    category: "action",
    year: new Date(),
  },
];

export default data;