import mypic from"@/app/public/image.jpeg"
import Header from "@/components/header"
import Image from "next/image"

type Idata={
  title:string;
  description:string;
}
const data:Idata[]=[{
title:"AI Engineer",
description:"AI-driven engineering design solutions offer a competitive edge.ensure relevance in a rapidly evolving industry.The engineering field has become increasingly reliant on AI"
},
{
  title:"Software Engineer",
  description:"Software engineers design and develop computer games, business applications, operating systems, network control systems, and middleware"
},
{
  title:"Data Engineer",
  description:"Data engineering is the practice of designing and building systems for collecting, storing, and analyzing data at scale. It is a broad field with applications in industry"
},
{
  title:"Computer Engineer",
  description:"Computer engineering is defined as the discipline that embodies the science and technology of design, construction, and maintenance of software and hardware ."
},
{
  title:"Network Engineer",
  description:"Network engineers focus on delivering high-availability network infrastructure to sustain the users' online and on-site IT activities. Network engineers often overlap with  roles."
},
{
  title:"Security Engineer",
  description:"Security engineers build security systems. They also implement and monitor security controls to protect an organization’s data from cyber-attacks, loss, or unauthorized access. "

}]

export default function Home() {
  return( 
    
    <div className="parentcontainer">
      {data.map((Idata)=>( 
      <div className="childcontainer">
        <div className="imagecontainer">
          <Image src={mypic} alt=""/>
          <h1 className="title">{Idata.title}
            </h1>          
          <p className="description">{Idata.description}
            </p>
            <button className="readMore"> Read More
              
            </button>
             
</div>
</div>
))}
       </div>
        )
         }

       
    
