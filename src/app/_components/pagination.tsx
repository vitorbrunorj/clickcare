import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/blog" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/blog" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/blog/page2">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/blog/page3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/blog/page2" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
