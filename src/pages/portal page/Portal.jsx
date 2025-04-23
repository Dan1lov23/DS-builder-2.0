import './portal.css'

import { motion } from 'framer-motion';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {Link} from "react-router-dom";

export default function Portal() {
    return (
        <div className="portalMain">
            <motion.img
                src={"https://i.imgur.com/oWIBzJng.jpg"}
                width={400}
                height={300}
                initial={{rotate: 0}}
                animate={{rotate: 360}}
                transition={{
                    duration: 4.0,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    border: 'none',
                    borderRadius: '5px',
                    color: '#fff',
                }}
            >
            </motion.img>
            <motion.h1
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{
                    duration: 3.0,
                }}
                className="text-[40px] font-bold capitalize"
                style={{
                    fontSize: '56px',
                    marginTop: '100px',
                    fontFamily: 'Pompadur',
                }}
            >
                Dark Souls Remastered builder
            </motion.h1>
            <Link to={'/'}>
                <motion.button
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                        duration: 3.0,
                    }}
                    className="text-[40px] font-bold capitalize"
                    style={{
                        borderColor: "grey",
                        borderRadius: '15px',
                        fontSize: '56px',
                        marginTop: '100px',
                        backgroundColor: 'black',
                        color: 'white',
                        boxShadow: '5px 5px 5px white',
                    }}
                >
                    <FontAwesomeIcon icon={faArrowRight} />
                </motion.button>
            </Link>
        </div>
    );
}
