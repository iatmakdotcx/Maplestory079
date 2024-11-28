using System;

namespace FMOD
{
	public enum DEBUGLEVEL
	{
		LEVEL_NONE,
		LEVEL_LOG,
		LEVEL_ERROR,
		LEVEL_WARNING = 4,
		LEVEL_HINT = 8,
		LEVEL_ALL = 255,
		TYPE_MEMORY,
		TYPE_THREAD = 512,
		TYPE_FILE = 1024,
		TYPE_NET = 2048,
		TYPE_EVENT = 4096,
		TYPE_ALL = 65535,
		DISPLAY_TIMESTAMPS = 16777216,
		DISPLAY_LINENUMBERS = 33554432,
		DISPLAY_COMPRESS = 67108864,
		DISPLAY_THREAD = 134217728,
		DISPLAY_ALL = 251658240,
		ALL = -1
	}
}