import TodoList from '@/views/TodoList';
import { DialogDemo } from '@/views/addTodoPopup';
import Image from 'next/image';
import Link from 'next/link';
import { GithubOutlined } from '@ant-design/icons'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-5 sm:px-[10%] py-[2%]">
      <div className='flex gap-4 my-3 items-center justify-between'>
        <div className='flex gap-3 items-center'>
          <Image src={'/images/Logo.svg'} alt={''} width={85} height={85} />
          <span className='text-gray-300'>|</span>
          <div className='font-semibold'>ToDoooo</div>
        </div>
        <div className='flex items-center gap-3'>
          <Link target='_blank' href={'https://github.com/AnoopNayak7'}><GithubOutlined /></Link>
        </div>
      </div>
      <hr />

      <div className='mt-5'>
        <DialogDemo />
      </div>

      <div>
        <TodoList />
      </div>
    </main>
  )
}
