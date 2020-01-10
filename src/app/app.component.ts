import {Component, OnInit} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isVisible = true

  posts: Post[] = [
    {title: 'Хочу выучить Angular компоненты', text: 'Я все еще учу компоненты', id: 1},
    {title: 'Следующий блок', text: 'Будет про директив и еще про пайпы', id: 2}
  ]

  ngOnInit(): void {
    setTimeout(() => {
      console.log('Timeout')
      this.posts[0].title = 'Changed!'
    }, 5000)
  }



  updatePosts(post: Post) {
    console.log('AAAA', post)
    this.posts.unshift(post)
  }

  removePost(id: number) {
    console.log('Id to remove', id)
    this.posts = this.posts.filter(p => p.id !== id)
  }


  // now: Date = new Date()

// toggle = false
//
//   arr = [1,1,3,5,7,8,9]
//
//   objs = [
//     {title: 'Post 1', author: 'Vlad',б  comments:[
//         {name: 'Max', text: 'Lorem 1'},
//         {name: 'Max', text: 'Lorem 2'},
//         {name: 'Max', text: 'Lorem 3'}
//       ]},
//     {title: 'Post 2', author: 'Vlad 2', comments:[
//         {name: 'Max 2', text: 'Lorem 1'},
//         {name: 'Max 2', text: 'Lorem 2'},
//         {name: 'Max 2', text: 'Lorem 3'}
//       ]}
//   ]


  // title = 'Some text'
  //
  // onInput(event: any){
  //   this.title = event.target.value
  // }


  // title = 'angular-basics';
  // number = 42
  // arr = [1, 2, 3]
  //
  // obj = {a: 1, b: {c: 2}}
  //
  // inputValue = ''
  //
  // // img = 'https://reactjsexample.com/content/images/2016/08/20160828182925.jpg'
  //
  // constructor() {
  //   // setTimeout(() => {
  //   //   console.log('Timeout is over')
  //   //   this.img = 'https://res.cloudinary.com/teepublic/image/private/s--eF-l8J9P--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1539378444/production/designs/3308909_0.jpg'
  //   // }, 5000)
  //
  // }
  //
  // onInput(event?: KeyboardEvent) {
  //   this.inputValue = (<HTMLInputElement>event.target).value
  // }
  // onBlur(str: string ) {
  //   this.inputValue = str
  // }
  //
  // onClick() {
  //   console.log('Click')
  // }

}
