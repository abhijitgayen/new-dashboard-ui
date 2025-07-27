import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { showSubmittedData } from '@/utils/show-submitted-data'
import { useTheme } from '@/contexts/ThemeContext'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  type ColorMode,
  type ContentLayout,
  type FontFamily,
  type Radius,
  type SidebarMode,
  type Scale,
  type AccentColorName,
  fontFamilyMaps,
  accentColors,
  radiusValues,
} from "@/contexts/ThemeConfig"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export const appearanceFormSchema = z.object({
  colorMode: z.enum(["light", "dark", "dark-blue"] as [ColorMode, ...ColorMode[]], {
    required_error: "Please select a color mode.",
  }),
  contentLayout: z.enum(["full", "centered"] as [ContentLayout, ...ContentLayout[]], {
    required_error: "Please select a content layout.",
  }),
  fontFamily: z.enum(["sans", "mono", "display"] as [FontFamily, ...FontFamily[]], {
    required_error: "Please select a font family.",
  }),
  radius: z.enum(["none", "sm", "md", "lg", "xl"] as [Radius, ...Radius[]], {
    required_error: "Please select a radius.",
  }),
  sidebarMode: z.enum(["default", "icon"] as [SidebarMode, ...SidebarMode[]], {
    required_error: "Please select a sidebar mode.",
  }),
  scale: z.enum(["xs", "sm", "lg"] as [Scale, ...Scale[]], {
    required_error: "Please select a scale.",
  }),
  accentColor: z.enum(["emerald", "violet", "rose", "amber", "sky"] as [AccentColorName, ...AccentColorName[]], {
    required_error: "Please select an accent color.",
  }),
})


type AppearanceFormValues = z.infer<typeof appearanceFormSchema>

export function AppearanceForm() {
  const { settings, updateSettings, resetToDefault } = useTheme()

  const defaultValues: AppearanceFormValues = {
    colorMode: settings.colorMode,
    contentLayout: settings.contentLayout,
    fontFamily: settings.fontFamily,
    radius: settings.radius,
    sidebarMode: settings.sidebarMode,
    scale: settings.scale,
    accentColor: settings.accentColor,
  }

  const form = useForm<AppearanceFormValues>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues,
  })

  function onSubmit(data: AppearanceFormValues) {
    updateSettings(data)
  }

  const themeOptions = [
    {
      value: 'light',
      label: 'Light',
      bgColor: 'bg-bg_light',
    },
    {
      value: 'dark',
      label: 'Dark',
      bgColor: 'bg-bg_dark',
    },
    {
      value: 'dark-blue',
      label: 'Dark Blue',
      bgColor: 'bg-bg_dark_blue',
    },
  ];

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='colorMode'
            render={({ field }) => (
              <FormItem className='space-y-1'>
                <FormLabel>Theme</FormLabel>
                <FormDescription>Select the theme  </FormDescription>
                <FormMessage />
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='grid max-w-lg grid-cols-2 lg:grid-cols-3 gap-8 pt-2'
                >
                  {themeOptions.map(renderThemeOption)}
                </RadioGroup>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='accentColor'
            render={({ field }) => (
              <FormItem className='space-y-1'>
                <FormLabel>Accent Color</FormLabel>
                <FormDescription>Select the accent color</FormDescription>
                <FormMessage />
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                  className="flex flex-wrap gap-4 pt-2"
                >
                  {accentColors.map((color) => (
                    <FormItem key={color.id}>
                      <FormLabel className='cursor-pointer'>
                        <FormControl>
                          <RadioGroupItem value={color.id} className="sr-only" />
                        </FormControl>
                        <div
                          className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
                          style={{
                            background: color.hex,
                            borderColor: field.value === color.id ? 'var(--accent-color)' : '#e5e7eb',
                            boxShadow: field.value === color.id ? '0 0 0 2px var(--accent-color)' : undefined,
                          }}
                        />
                        <span className="block text-xs text-center mt-1">{color.label}</span>
                      </FormLabel>
                    </FormItem>
                  ))}
                </RadioGroup>
              </FormItem>
            )}
          />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <FormField
              control={form.control}
              name='fontFamily'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Font Family</FormLabel>
                  <FormDescription>Select the font family  </FormDescription>
                  <FormMessage />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={settings.fontFamily} />
                    </SelectTrigger>
                    <SelectContent>
                      {fontFamilyMaps.map((font) => (
                        <SelectItem key={font.id} value={font.id}>
                          {font.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='sidebarMode'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Sidebar Mode</FormLabel>
                  <FormDescription>Select the sidebar mode  </FormDescription>
                  <FormMessage />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={settings.sidebarMode} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Default</SelectItem>
                      <SelectItem value="icon">Icon Only</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='contentLayout'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Content Layout</FormLabel>
                  <FormDescription>Select the content layout  </FormDescription>
                  <FormMessage />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={settings.contentLayout} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full">Full Width</SelectItem>
                      <SelectItem value="centered">Centered</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='radius'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Border Radius</FormLabel>
                  <FormDescription>Select the border radius  </FormDescription>
                  <FormMessage />
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder={settings.radius} />
                    </SelectTrigger>
                    <SelectContent>
                      {radiusValues.map((radius) => (
                        <SelectItem key={radius.id} value={radius.id}>
                          {radius.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <Button type='submit'>Update preferences</Button>
        </form>
      </Form>
    </>
  )
}

const renderThemeOption = ({ value, label, bgColor }: { value: string; label: string; bgColor: string }) => (
  <FormItem key={value}>
    <FormLabel className='[&:has([data-state=checked])>div]:border-primary'>
      <FormControl>
        <RadioGroupItem value={value} className='sr-only' />
      </FormControl>
      <div className={`border border-border hover:border-accent items-center rounded-md p-1 ${bgColor}`}>
        <div className={`space-y-2 rounded-sm ${bgColor} p-2`}>
          <div className={`space-y-2 rounded-md  p-2 shadow-xs ${bgColor}`}>
            <div className={`h-2 w-[80px] rounded-lg bg-primary`} />
            <div className={`h-2 w-[100px] rounded-lg bg-primary`} />
          </div>
          <div className={`flex items-center space-x-2 rounded-md ${bgColor} p-2 shadow-xs`}>
            <div className={`h-4 w-4 rounded-full bg-primary`} />
            <div className={`h-2 w-[100px] rounded-lg bg-primary`} />
          </div>
          <div className={`flex items-center space-x-2 rounded-md ${bgColor} p-2 shadow-xs`}>
            <div className={`h-4 w-4 rounded-full bg-primary`} />
            <div className={`h-2 w-[100px] rounded-lg bg-primary`} />
          </div>
        </div>
      </div>
      <span className='block w-full p-2 text-center font-normal'>{label}</span>
    </FormLabel>
  </FormItem>
);