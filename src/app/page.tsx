import { ModeToggle } from '@/components/mode-toggle';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main className='w-3/4 h-full flex flex-col items-center gap-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute'>
        <div className='flex items-center justify-center gap-5 md:gap-[50px]'>
          <Image
            className='size-1/2 invert dark:invert-0'
            src='/fleekLogo.svg'
            alt='Fleek Logo'
            width={200}
            height={87}
            priority
          />
          <Image src='/plus.svg' alt='add' width={20} height={20} />
          <Image
            src='/next.svg'
            className='size-1/2 dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
            alt='Next Logo'
            width={200}
            height={87}
            priority
          />

          <div className='ml-2'>
            <ModeToggle />
          </div>
        </div>

        <p className='text-2xl'>
          This is a template for creating a Next.js site and deploying it on
          Fleek.
        </p>

        <ul className='grid sm:grid-cols-1 md:grid-cols-2 gap-[15px]'>
          <Card className='bg-slate-200 dark:bg-slate-900 lg:min-w-[400px] xl:min-w-[450px]  2xl:min-w-[600px]'>
            <CardHeader>
              <CardTitle className='text-slate-900 dark:text-white/90'>
                Fleek Documentation
              </CardTitle>
              <CardDescription className='min-h-fit md:min-h-16 lg:min-h-14'>
                Learn about Fleek & the available services by checking our
                official docs.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex gap-[15px] items-center'>
              <div className='flex flex-col sm:flex-row w-full items-center justify-between gap-4 sm:gap-2'>
                <Image
                  className='size-24 invert dark:invert-0'
                  src='/fleekLogo.svg'
                  alt='Fleek Logo'
                  width={50}
                  height={50}
                  priority
                />
                <CardFooter>
                  <Button variant='outline' size='lg'>
                    <Link href='https://docs.fleek.xyz/'>Read more</Link>
                  </Button>
                </CardFooter>
              </div>
            </CardContent>
          </Card>
          <Card className='bg-slate-200 dark:bg-slate-900 lg:min-w-[400px] xl:min-w-[450px] 2xl:min-w-[600px]'>
            <CardHeader>
              <CardTitle className='text-slate-900 dark:text-white/90'>
                Next.js Documentation
              </CardTitle>
              <CardDescription className='min-h-fit md:min-h-16 lg:min-h-14'>
                Learn about how Next.js works and explore the official API docs.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex gap-[15px] items-center'>
              <div className='flex flex-col sm:flex-row w-full items-center justify-between gap-4 sm:gap-2'>
                <Image
                  className='size-24 invert dark:invert-0'
                  src='/nextMark.svg'
                  alt='Fleek Logo'
                  width={50}
                  height={50}
                  priority
                />
                <CardFooter>
                  <Button variant='outline' size='lg'>
                    <Link href='https://nextjs.org/docs/'>Read more</Link>
                  </Button>
                </CardFooter>
              </div>
            </CardContent>
          </Card>
          <Card className='bg-slate-200 dark:bg-slate-900 lg:min-w-[400px] xl:min-w-[450px] 2xl:min-w-[600px]'>
            <CardHeader>
              <CardTitle className='text-slate-900 dark:text-white/90'>
                Fleek Blog
              </CardTitle>
              <CardDescription className='min-h-fit md:min-h-16 lg:min-h-14'>
                Checkout our Blog for more information about Fleek.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex gap-[15px] items-center'>
              <div className='flex flex-col sm:flex-row w-full items-center justify-between gap-4 sm:gap-2'>
                <Image
                  className='size-24 invert dark:invert-0'
                  src='/fleekMark.svg'
                  alt='Fleek Logo'
                  width={50}
                  height={50}
                  priority
                />
                <CardFooter>
                  <Button variant='outline' size='lg'>
                    <Link href='https://blog.fleek.xyz/'>Read more</Link>
                  </Button>
                </CardFooter>
              </div>
            </CardContent>
          </Card>
          <Card className='bg-slate-200 dark:bg-slate-900 lg:min-w-[400px] xl:min-w-[450px] 2xl:min-w-[600px]'>
            <CardHeader>
              <CardTitle className='text-slate-900 dark:text-white/90'>
                Next.js Blog
              </CardTitle>
              <CardDescription className='min-h-fit md:min-h-16 lg:min-h-14'>
                Check the latest news about Next.js.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex gap-[15px] items-center'>
              <div className='flex flex-col sm:flex-row w-full items-center justify-between gap-4 sm:gap-2'>
                <Image
                  className='size-24 invert dark:invert-0'
                  src='/nextMark.svg'
                  alt='Fleek Logo'
                  width={50}
                  height={50}
                  priority
                />
                <CardFooter>
                  <Button variant='outline' size='lg'>
                    <Link href='https://nextjs.org/blog/'>Read more</Link>
                  </Button>
                </CardFooter>
              </div>
            </CardContent>
          </Card>
          <Card className='bg-slate-200 dark:bg-slate-900 lg:min-w-[400px] xl:min-w-[450px] 2xl:min-w-[600px]'>
            <CardHeader>
              <CardTitle className='text-slate-900 dark:text-white/90'>
                Shadcn UI
              </CardTitle>
              <CardDescription className='min-h-fit md:min-h-16 lg:min-h-14'>
                Learn how to use shadcn/ui with Next.js.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex gap-[15px] items-center'>
              <div className='flex flex-col sm:flex-row w-full items-center justify-between gap-4 sm:gap-2'>
                <Image
                  className='size-24 invert dark:invert-0'
                  src='/shadcn.svg'
                  alt='Fleek Logo'
                  width={50}
                  height={50}
                  priority
                />
                <CardFooter>
                  <Button variant='outline' size='lg'>
                    <Link href='https://ui.shadcn.com/docs/installation/next/'>
                      Read more
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </CardContent>
          </Card>
          <Card className='bg-slate-200 dark:bg-slate-900 lg:min-w-[400px] xl:min-w-[450px] 2xl:min-w-[600px]'>
            <CardHeader>
              <CardTitle className='text-slate-900 dark:text-white/90'>
                Hardhat
              </CardTitle>
              <CardDescription className='min-h-fit md:min-h-16 lg:min-h-14'>
                Learn how to use Hardhat with Next.js.
              </CardDescription>
            </CardHeader>
            <CardContent className='flex gap-[15px] items-center'>
              <div className='flex flex-col sm:flex-row w-full items-center justify-between gap-4 sm:gap-2'>
                <Image
                  className='size-24 object-contain'
                  src='/hardhat-logo.png'
                  alt='Fleek Logo'
                  width={50}
                  height={50}
                  priority
                />
                <CardFooter>
                  <Button variant='outline' size='lg'>
                    <Link href='https://ui.shadcn.com/docs/installation/next/'>
                      Read more
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </CardContent>
          </Card>
        </ul>
        <div className='invisible w-full py-3' />
      </main>
    </>
  );
}
