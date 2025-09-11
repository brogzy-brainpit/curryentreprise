'use client';
import styles from './style.module.scss';
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import { Play, X } from 'lucide-react';

const projects = [
  {
    title: "R & V",
    src: "https://i.vimeocdn.com/video/1669748638-ce67a14c1fc56905e2c0f01cfb7f1ab1229d10002c0ea8f3433266d85cb02fcb-d_1920x1080",
    color: "#AA85751",
    url: "https://www.betterdaycoach.com/",
    service: "Video",
    videoUrl: "/videos/vid2.mp4", // 👈 video file in public/videos
  },
   {
    title: "J & M",
    src: "https://static.wixstatic.com/media/bcc971_8a7a78cacb574c508f6f2608514c4fc1f002.jpg/v1/fill/w_960,h_540,enc_auto/file.jpeg",
    color: "#945600",
    url: "https://www.betterdaycoach.com/",
    service: "Video",
    videoUrl: "/videos/vid2.mp4", // 👈 video file in public/videos
  },
   {
    title: "G TZ",
    src: "https://static.wixstatic.com/media/bcc971_622ec7ef49e04d2d9f525e0e3bcc55ccf002.jpg/v1/fill/w_960,h_540,enc_auto/file.jpeg",
    color: "5C946E",
    url: "https://www.betterdaycoach.com/",
    service: "Video",
    videoUrl: "/videos/vid2.mp4", // 👈 video file in public/videos
  },
   {
    title: "B & J",
    src: "https://static.wixstatic.com/media/bcc971_50d020521bf84fbaab0af46d030f48aff002.jpg/v1/fill/w_320,h_180,enc_auto/file.jpeg",
    color: "#887880",
    url: "https://www.betterdaycoach.com/",
    service: "Video",
    videoUrl: "/videos/vid2.mp4", // 👈 video file in public/videos
  },
   {
    title: "S & JM",
    src: "https://static.wixstatic.com/media/bcc971_be5541a7ee0547b28e93794c411252a5f002.jpg/v1/fill/w_320,h_180,enc_auto/file.jpeg%201x,%20https://static.wixstatic.com/media/bcc971_be5541a7ee0547b28e93794c411252a5f002.jpg/v1/fill/w_640,h_360,enc_auto/file.jpeg%202x,%20https://static.wixstatic.com/media/bcc971_be5541a7ee0547b28e93794c411252a5f002.jpg/v1/fill/w_960,h_540,enc_auto/file.jpeg%203x",
    color: "#706D63",
    url: "https://www.betterdaycoach.com/",
    service: "Video",
    videoUrl: "/videos/vid2.mp4", // 👈 video file in public/videos
  },
  // ... other projects
];

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Index({ header }) {
  const [modal, setModal] = useState({ active: false, index: 0 });
  const { active, index } = modal;

  const [expanded, setExpanded] = useState(null);

  const modalContainer = useRef(null);
  const cursor = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);

  useEffect(() => {
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    });
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    });
  }, []);

  const moveItems = (x, y) => {
    xMoveContainer.current(x);
    yMoveContainer.current(y);
    xMoveCursor.current(x);
    yMoveCursor.current(y);
  };

  const manageModal = (active, index, x, y) => {
    moveItems(x, y);
    setModal({ active, index });
  };

  return (
    <main
      onMouseMove={(e) => {
        moveItems(e.clientX, e.clientY);
      }}
      className={`${styles.projects} container mx-auto`}
    >
      <div className={styles.body}>
        {header && (
          <h1
            id="projects"
            className="py-6 text-footer text-brand-text dark:text-brand-text-dark font-custom flex justify-start text-left w-full uppercase"
          >
            My Portfolio 
          </h1>
        )}

        {projects.map((project, idx) => (
          <Project
            index={idx}
            url={project.url}
            title={project.title}
            service={project.service}
            manageModal={manageModal}
            key={idx}
          />
        ))}
      </div>

      {/* Hover modal preview */}
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className={styles.modalContainer}
        onClick={() => setExpanded(index)} // 👈 open video modal on click
      >
        <div
          style={{ top: index * -100 + "%" }}
          className={styles.modalSlider}
        >
          {projects.map((project, idx) => {
            const { src, color } = project;
            return (
              <div
                className={styles.modal}
                style={{ backgroundColor: color }}
                key={`modal_${idx}`}
              >
                <Image src={src} width={300} height={0} alt="preview" />
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Hover cursor */}
      <motion.div
        ref={cursor}
        className={`${styles.cursor} text-[12px] font-custom bg-brand-text dark:bg-brand-text-dark dark:text-brand-text text-brand-text-dark`}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <Play /> Play
      </motion.div>

      {/* Fullscreen video modal */}
      {expanded !== null && projects[expanded].videoUrl && (
  <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80">
    <div className="relative w-11/12 md:w-3/4 lg:w-1/2">
      {/* Exit button */}
      <button
        onClick={() => setExpanded(null)}
        className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg"
      >
        <X className="w-6 h-6 text-black" />
      </button>

      {/* Video */}
      <video
        key={projects[expanded].videoUrl}
        src={projects[expanded].videoUrl}
        className="w-full h-auto rounded-lg"
        autoPlay
        loop
        muted
        controls
      />
    </div>
  </div>
)}

    </main>
  );
}
