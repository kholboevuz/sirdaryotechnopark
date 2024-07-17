/* eslint-disable react/no-unescaped-entities */

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

export function LangueDown() {
	return (
		<Select>
			<SelectTrigger className='w-[180px]'>
				<SelectValue placeholder='Tilni tanlang' />
			</SelectTrigger>
			<SelectContent>
				<SelectGroup>
					<SelectItem value='oz'>O'zbekcha</SelectItem>
					<SelectItem value='uz'>Ўзбекча</SelectItem>
					<SelectItem value='ru'>Русский</SelectItem>
					<SelectItem value='eng'>English</SelectItem>
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}
