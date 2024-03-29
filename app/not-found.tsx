import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pb-8 pt-6 md:space-y-5">
        <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 md:px-6 md:text-8xl md:leading-14">
          404
        </h1>
      </div>
      <div className="max-w-md text-center">
        <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
          이 페이지는 없는 페이지 입니다!
        </p>
        <p className="mb-8">주소를 한번 더 확인하거나 다른 것들을 한 번 구경해 보세요!</p>
        <Link
          href="/"
          className="focus:shadow-outline-blue text-md inline rounded-lg border border-transparent bg-white px-4 py-2 font-medium leading-5 text-black shadow-md transition-colors duration-150 hover:bg-slate-200 focus:outline-none dark:hover:bg-blue-500"
        >
          메인 페이지로
        </Link>
      </div>
    </div>
  )
}
