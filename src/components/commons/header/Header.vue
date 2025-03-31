<script lang="ts" setup>
	import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
	import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import {
	useAuth
} from '@/composable/useAuth'
const {
	handleLogout
} =  useAuth()
</script>
<template>
	<div class="header w-full border-b border-gray-100 shadow-md top-0 fixed h-24 left-0 z-100">
		<div class="w-full flex justify-between flex-row items-center lg:px-24 py-3">
			<h1 class="text-xl font-bold">
				Dashboard
			</h1>

			 <DropdownMenu>
		    <DropdownMenuTrigger>
		    	<Avatar>
					    <AvatarImage src="https://github.com/unovue.png" alt="@unovue" />
					    <AvatarFallback>CN</AvatarFallback>
					  </Avatar>
			</DropdownMenuTrigger>
		    <DropdownMenuContent>
		      <DropdownMenuLabel>My Account</DropdownMenuLabel>
		      <DropdownMenuSeparator />
		      <DropdownMenuItem @click="handleLogout">Logout</DropdownMenuItem>
		     
		    </DropdownMenuContent>
		  </DropdownMenu>
			
		</div>
	</div>
</template>