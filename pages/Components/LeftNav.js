import React from 'react'
import styles from "../../styles/Home.module.css";
import { BeakerIcon } from '@heroicons/react/solid';
import { CheckIcon} from '@heroicons/react/solid';
import { ChatIcon} from '@heroicons/react/solid';
import { FolderAddIcon} from '@heroicons/react/solid';
function LeftNav() {
  return (
    <div className={styles.navcontainer} style={{background:"black"}}>
<div className={styles.logo}>
<p>STREAMline</p>
</div>
<div className={styles.wrapper}>
  <ul>
    <li><a href="#">Dashboard</a></li>
    <li><img icon={ChatIcon} style={{width:"18px",cursor:"pointer"}} /> <a href="#">users</a></li>
    <li><img icon={FolderAddIcon} /> <a href="#">Role </a></li>
    <li><img icon={FolderAddIcon} /> <a href="#">Permission</a></li>
    <li><img icon={FolderAddIcon} /> <a href="#">Accounts</a></li>
  </ul>
</div>
    </div>
  )
}

export default LeftNav