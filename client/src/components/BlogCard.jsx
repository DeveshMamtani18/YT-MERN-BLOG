import React from 'react'
import { Card, CardContent } from './ui/card'
import { Badge } from "@/components/ui/badge"

import { Avatar } from './ui/avatar'
import { AvatarImage } from '@radix-ui/react-avatar'
import { FaRegCalendarAlt } from "react-icons/fa";
import usericon from '@/assets/images/user.png'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { RouteBlogDetails } from '@/helpers/RouteName'

const BlogCard = ({ props }) => {
    // Add null checks for all nested properties
    const author = props?.author || {};
    const category = props?.category || {};
    const featuredImage = props?.featuredImage;
    const createdAt = props?.createdAt;
    const title = props?.title;
    const slug = props?.slug;

    return (
        <Link to={RouteBlogDetails(category?.slug || '', slug || '')}>
            <Card className="pt-5">
                <CardContent>
                    <div className='flex items-center justify-between'>
                        <div className='flex justify-between items-center gap-2'>
                            <Avatar>
                                <AvatarImage src={author?.avatar || usericon} />
                            </Avatar>
                            <span>{author?.name || 'Unknown Author'}</span>
                        </div>
                       
                        <Badge variant="outline" className="bg-violet-500">User</Badge>
                    </div>

                    <div className='my-2'>
                        {featuredImage && <img src={featuredImage} className='rounded' alt={title} />}
                    </div>
                    <div>
                        <p className='flex items-center gap-2 mb-2'>
                            <FaRegCalendarAlt />
                            <span>{createdAt ? moment(createdAt).format('DD-MM-YYYY') : 'Unknown date'}</span>
                        </p>
                        <h2 className='text-2xl font-bold line-clamp-2'>{title || 'Untitled Post'}</h2>
                    </div>
                </CardContent>
            </Card>
        </Link>
    )
}

export default BlogCard