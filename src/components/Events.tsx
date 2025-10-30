'use client';
import { AnimatePresence, motion, useDragControls, useMotionValue } from 'framer-motion';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useMeasure from 'react-use-measure';
import { SectionHeading } from './ui/SectionHeading';
const CARD_WIDTH = 350;
const CARD_HEIGHT = 350;
const MARGIN = 20;
const CARD_SIZE = CARD_WIDTH + MARGIN;
const BREAKPOINTS = { sm: 640, lg: 1024 };

export const Events = () => {
  const [ref, { width }] = useMeasure();
  const [offset, setOffset] = useState(0);
  const [selectedItem, setSelectedItem] = useState<ItemType | null>(null);

  const CARD_BUFFER = width > BREAKPOINTS.lg ? 3 : width > BREAKPOINTS.sm ? 2 : 1;
  const CAN_SHIFT_LEFT = offset < 0;
  const CAN_SHIFT_RIGHT = Math.abs(offset) < CARD_SIZE * (items.length - CARD_BUFFER);

  const shiftLeft = () => CAN_SHIFT_LEFT && setOffset(pv => pv + CARD_SIZE);
  const shiftRight = () => CAN_SHIFT_RIGHT && setOffset(pv => pv - CARD_SIZE);

  return (
    <section className=" text-white " ref={ref}>
      <div className="relative overflow-hidden p-4">
        <div className="mx-auto max-w-screen-xl">
          {/* <p className="mb-4 text-2xl font-semibold">
            Everything. <span className="text-neutral-400">Yes, even that.</span>
          </p> */}
          <div className='pb-4'>
          <SectionHeading>
  Recent Highlights  
  <br />
  <span className="bg-gradient-to-br from-blue-400 to-blue-700 py-4 bg-clip-text text-transparent">
    What&apos;s Coming Up Next
  </span>
</SectionHeading>


                    {/* <div className='flex items-center flex-col'>
                    <SectionHeading>
          Driven by Vision
                    &nbsp;
                      <span className="bg-gradient-to-br from-blue-400  to-blue-700 py-4 bg-clip-text text-transparent">
                      Defined by Impact
                      </span>
                    </SectionHeading>
                    </div> */}
                    {/* <p className="text-justify pt-2">
            The <span className="font-bold">E-Cell (Entrepreneurship Cell) of IIITD</span> is a remarkable group of students who are passionate about fostering an entrepreneurial spirit amongst their peers. In a world where startups are increasingly important for driving innovation and solving problems, 
          </p>
          <br /> */}
                    </div>

          <motion.div animate={{ x: offset }} className=" flex">
            {items.map(item => (
              <Card key={item.id} {...item} onClick={() => setSelectedItem(item)} />
            ))}
          </motion.div>
        </div>

        <motion.button
          animate={{ x: CAN_SHIFT_LEFT ? '0%' : '-100%' }}
          className="absolute left-0 top-[60%] z-30 rounded-r-xl bg-neutral-800/60 p-3 pl-2 text-4xl text-white backdrop-blur-sm hover:pl-3"
          onClick={shiftLeft}
        >
          <FiChevronLeft />
        </motion.button>
        <motion.button
          animate={{ x: CAN_SHIFT_RIGHT ? '0%' : '100%' }}
          className="absolute right-0 top-[60%] z-30 rounded-l-xl bg-neutral-800/60 p-3 pr-2 text-4xl text-white backdrop-blur-sm hover:pr-3"
          onClick={shiftRight}
        >
          <FiChevronRight />
        </motion.button>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <Modal1 open={!!selectedItem} setOpen={() => setSelectedItem(null)}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center justify-center h-full px-2">
  {/* Left: Square Image */}
  <div
    className="w-full md:w-[25%] aspect-square rounded-xl bg-cover bg-center shadow-lg"
    style={{ backgroundImage: `url(${selectedItem.url})` }}
  />

  {/* Right: Expanded Text */}
  <div className="w-full md:w-[60%] space-y-4 text-left text-neutral-400">
    <h2 className="text-4xl font-bold text-neutral-200">{selectedItem.title}</h2>
    <p className="text-sm uppercase tracking-wide text-blue-400">{selectedItem.category}</p>
    <p className="text-base leading-relaxed text-justify text-neutral-300">
      {selectedItem.description}
    </p>
  </div>
</div>

          </Modal1>
        )}
      </AnimatePresence>
    </section>
  );
};

type CardProps = ItemType & { onClick: () => void };
const Card = ({ url, category, title, description,summary, onClick }: CardProps) => (
  <div
    onClick={onClick}
    className="relative shrink-0 cursor-pointer rounded-2xl bg-neutral-800 shadow-lg transition-all hover:scale-[1.015] hover:shadow-2xl"
    style={{
      width: CARD_WIDTH,
      height: CARD_HEIGHT,
      marginRight: MARGIN,
      backgroundImage: `url(${url})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
    }}
  >
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-black/90 via-black/60 to-black/0 p-6 text-white hover:backdrop-blur-sm">
      <span className="text-xs uppercase text-blue-300">{category}</span>
      <p className="my-2 text-3xl font-bold">{title}</p>
      <p className="text-lg text-neutral-300">{summary}</p>
    </div>
  </div>
);

const Modal1: React.FC<ModalProps> = ({ open, setOpen, children }) => {
  const y = useMotionValue(0);
  const controls = useDragControls();

  const handleClose = () => setOpen();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={handleClose}
      className="fixed inset-0 z-50 bg-black/70 flex items-end"
    >
      <motion.div
        onClick={(e) => e.stopPropagation()}
        initial={{ y: '100%' }}
        animate={{ y: 0 }}
        exit={{ y: '100%' }}
        transition={{ ease: 'easeInOut', duration: 0.5 }}
        className="w-full h-[70vh] overflow-hidden rounded-t-3xl bg-neutral-900"
        style={{ y }}
        drag="y"
        dragControls={controls}
        dragConstraints={{ top: 0 }}
        dragElastic={0.3}
        onDragEnd={(_, info) => info.offset.y > 100 && handleClose()}
      >
        <div className="flex justify-center bg-neutral-900 p-4">
          <div
            onPointerDown={(e) => controls.start(e)}
            className="h-2 w-14 rounded-full bg-slate-200 cursor-grab"
          />
        </div>
        <div className="overflow-y-scroll p-4 pt-2 h-full">
          {children}
        </div>
      </motion.div>
    </motion.div>
  );
};

const items: ItemType[] = [
  { id: 1, url: '/Events/1.png', category: 'Tech', title: 'Uplift Inauguration',summary:'The Uplift Inauguration marked the launch of E-Cell IIIT-Delhis initiative to promote social entrepreneurship.', description: 'The Uplift Inauguration marked the launch of E-Cell IIIT-Delhis initiative to promote social entrepreneurship. The event featured esteemed panelists, including Neha Jain, co-founder of Meraki and a passionate social innovator; Pragya Vats, Head of Campaigns & Communications and a strong advocate for social impact; and Malvika Mudgal, founder of Jagan Sankalp Innovation Foundation and a policy expert. Launched by E-Cell IIIT-Delhi, Uplift is a dedicated platform aimed at fostering social startups that drive meaningful societal change. By providing funding, mentorship, and essential resources, Uplift empowers students to create impact-driven ventures and develop sustainable solutions for real-world challenges, bridging the gap between entrepreneurship and social good.' },
  { id: 2, url: '/Events/2.png', category: 'Tech', title: 'Digital India future labs',summary:'IIIT Delhi hosted the Digital India Future Labs Launch Event, led by Shri Rajeev Chandrasekhar. ', description: 'IIIT Delhi hosted the Digital India Future Labs Launch Event, led by Shri Rajeev Chandrasekhar, Honarable Minister of State for Electronics & IT, Skill Development & Entrepreneurship, and Jal Shakti. With 450 participants and 900 registrations, the event unveiled the vision and roadmap for Future Labs, aimed at fostering product innovation and startup support. Through workshops and discussions, stakeholders shared insights to shape this initiative. The event strengthened networking, startup empowerment, and community building, reinforcing Indias commitment to digital innovation and entrepreneurship under the Digital India mission.' }
  ,
  { id: 2, url: '/Events/3.png', category: 'Tech', title: 'Fork-IT Challenge 2024',summary:'Fork-IT Challenge 2024 was an electrifying 19-hour overnight hackathon held on 15-16th November 2024 at IIIT Delhi', description: 'Fork-IT Challenge 2024 was an electrifying 19-hour overnight hackathon held on 15-16th November 2024 at IIIT Delhi, bringing together developers to explore computational gastronomy using RecipeDB and FlavorDB APIs. Organized by CoSy Lab, E-Cell IIITD, and Foodoscope, the event witnessed participation from 30+ teams, each showcasing exceptional creativity and technical prowess. With an ₹80,000 prize pool, teams built groundbreaking web and mobile applications, pushing the boundaries of food-tech innovation. The top projects were showcased at the Symposium on Computational Gastronomy, offering participants an exclusive opportunity to network with industry leaders. Fork-IT 2024 truly set new standards in food-tech innovation!' }

];

type ItemType = {
  id: number;
  url: string;
  category: string;
  title: string;
  description: string;
  summary : string;
};

type ModalProps = {
  open: boolean;
  setOpen: () => void;
  children: React.ReactNode;
};
