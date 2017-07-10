import fs from 'fs'
import path from "path"
import Rx from 'rxjs/Rx'
const filePath = path.join("/Users/moazzamkhan/Me/moa-repo", 'NODE_REPO.json');

class NotesRepository {
  save(content) {
    let writeFileAsObservable = Rx.Observable.bindNodeCallback(fs.writeFile)
    writeFileAsObservable(filePath, content).subscribe(() => {
      console.log("saved")
    })
  }

  read() {
    let readFileAsObservable = Rx.Observable.bindNodeCallback(fs.readFile)
    return readFileAsObservable(filePath, { encoding: 'utf-8' })
  }
}

export default (new NotesRepository())
